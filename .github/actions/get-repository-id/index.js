const core = require('@actions/core');
const github = require('@actions/github');
const { graphql } = require("@octokit/graphql");

async function getRepositoryId(octokit, owner, repo)
{
    return await octokit.graphql(
        `query($name: String!, $owner: String!) {
            repository(owner:$owner, name: $name) {
                id
            }
        }`,
        {
            owner: `${ owner }`,
            name: `${ repo }`
        }
    );
}

try {
    const context = github.context;
    const owner = context.payload.repository.owner.login;
    const repo = context.payload.repository.name;
 
    const authentication = core.getInput('authentication');
    const octokit = github.getOctokit(authentication);

    getRepositoryId(octokit, owner, repo)
        .then((result) => 
        {
            core.setOutput("repo_id", result.repository.id);
        }, error => core.setFailed(error.message));
} catch (error) {
    core.setFailed(error.message);
}