# Obsidian Plugin Template

This repository serves as a template to quickly create a new Obsidian plugin. It includes the essential files and structure needed to get started with plugin development for Obsidian.

## Getting Started

1. **Clone this repository.**
2. **Replace placeholders:**
   - Search for `MyPlugin`, `my-plugin`, and `my-name` throughout the codebase.
   - Replace these placeholders with your plugin's actual name, its slug (lowercase with hyphens), and your own name, respectively.
3. **Customize the files and structure** according to your plugin requirements.
4. **Start the development process** with `npm run dev`.
5. **Prepare for release:**
   - When you're ready to release a new version, update the version using `npm run version`.
   - Push a new tag to trigger the GitHub release workflow.

## NPM Scripts

You can use the following NPM commands to streamline your development workflow:

- **`npm run dev`**  
  This command watches for changes in your code and rebuilds the plugin automatically. It works best when combined with the hot-reloader plugin for a seamless development experience.

- **`npm run build`**  
  Use this command to build your plugin for production. This will compile and package your plugin into a format that can be distributed and used in Obsidian.

- **`npm run version`**  
  This command updates the version number across multiple files: `manifest.json`, `package.json`, and `versions.js`. It also ensures you maintain a proper changelog by adding the new version details to `RELEASE.md`.

## GitHub Workflows

This template includes a GitHub Actions workflow to automate your release process:

- **Release Workflow**  
  The workflow triggers a new release whenever you push a new tag to the repository. The tag should match the version format specified in your `manifest.json` (e.g., `0.1.0`). Ensure the tag version corresponds to the version in `manifest.json` to avoid discrepancies.
  - **Release Description:** The description for the GitHub release will be populated with the contents of your `RELEASE.md` file. Make sure to keep this file up to date with the latest changes and release notes.

## Additional Notes

- **Placeholder Replacement:** Make sure to search and replace all instances of `MyPlugin`, `my-plugin`, and `my-name` to fit your specific plugin and personal details.
