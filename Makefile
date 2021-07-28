include .env.local

release:
	CI=true HUSKY=0 GITHUB_TOKEN=${GITHUB_TOKEN} yarn release
