SHELL := /bin/bash

test: ## Run tests
	@npm test

fmt: ## Format code
	@npm run format

lint: ## Run static analysis
	@npm run lint

check: ## Run all checks for this project
	@npm run format:check
	@npm run lint
	@npm run test
	@npm run build
