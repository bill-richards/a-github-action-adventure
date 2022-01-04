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

async function setHomepageUrl(octokit, repositoryId, homepage)
{
    return await octokit.graphql(
        `mutation($id: ID!, $homePage: URI) {
            updateRepository(input: {repositoryId: $id, homepageUrl: $homePage, hasIssuesEnabled: true}) {
                repository {
                    id
                }
            }
        }`,
        {
            id: `${ repositoryId }`,
            homePage: `${ homepage }`
        }
    );
}

try {
    const context = github.context;
    const owner = context.payload.repository.owner.login;
    const repo = context.payload.repository.name;
    const homepage = `https://${ owner }.github.io/${ repo }`;

    const authentication = core.getInput('authentication');
    const octokit = github.getOctokit(authentication);

    getRepositoryId(octokit, owner, repo)
        .then((result) => 
        {
            console.log(`Setting homepageUrl to [${ homepage }] for repository [${ owner }/${ repo }]`);
            setHomepageUrl(octokit, result.repository.id, homepage)
                .then({}, error => core.setFailed(error));
        });
} catch (error) {
    core.setFailed(error.message);
}