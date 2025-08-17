# Contributing to Tech Job Preparation

Thank you for your interest in contributing to this project! This guide will help you get started.

## 🤝 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- 📝 **Content improvements**: Fix typos, improve explanations, add examples
- 🆕 **New content**: Add new sections, guides, or resources
- 🐛 **Bug fixes**: Fix broken links, formatting issues, or technical problems
- 💡 **Feature suggestions**: Propose new features or improvements

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/tanb33r/tech-job-preparation-bd.git
   cd tech-job-preparation-bd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run docs:dev
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Content Guidelines

### Writing Style

- **Less is more**: We don't want to have long eassay here, shorter clear guideline is more appreciated.
- **Clear and concise**: Use simple language that freshers can understand
- **Actionable**: Provide specific steps and examples
- **Structured**: Use headings, lists, and sections for easy scanning

### Content Structure

Each guide should follow this structure:

```markdown
# Title

## Introduction
Brief overview of the topic and its importance

## Main Content Sections
### Subsection 1
Content with examples and practical tips

### Subsection 2
More detailed information

## Resources
Links to additional learning materials

## Next Steps
What to do after reading this guide

---

*Content will be updated regularly...*
```

### Code Examples

- Use proper syntax highlighting
- Include comments explaining complex parts
- Provide complete, runnable examples when possible
- Test all code examples before submitting

### Links and Resources

- Verify all external links work
- Use HTTPS links when available
- Prefer official documentation over third-party resources
- Include brief descriptions for external resources

## 🔧 Technical Guidelines

### File Organization

- Place content in appropriate directories
- Use kebab-case for file names (`resume-building.md`)
- Update navigation in `.vitepress/config.js` when adding new pages

### Markdown Formatting

- Use proper heading hierarchy (H1 → H2 → H3)
- Include alt text for images
- Use code blocks with language specification
- Use tables for structured data comparison

### VitePress Features

Take advantage of VitePress features:

```markdown
::: tip Pro Tip
Use this for helpful tips
:::

::: warning Important
Use this for important warnings
:::

::: danger Caution
Use this for critical information
:::
```

## 🚀 Submission Process

### Pull Request Guidelines

1. **Create descriptive commits**
   ```bash
   git commit -m "Add: SQA Guideline"
   ```

2. **Write a clear PR description**
   - Explain what changes you made
   - Why the changes are needed
   - Include screenshots for UI changes

3. **Test your changes**
   - Run `npm run docs:build` to ensure no build errors
   - Check that all links work
   - Verify formatting looks correct

4. **Submit the pull request**
   - Use a descriptive title
   - Reference any related issues
   - Request review from maintainers

### Review Process

- All PRs require review before merging
- Reviewers may suggest changes or improvements
- Address feedback promptly and professionally
- Once approved, maintainers will merge your PR

## 📋 Content Checklist

Before submitting content, ensure:

- [ ] Content is accurate and up-to-date
- [ ] All links work and are relevant
- [ ] Grammar and spelling are correct
- [ ] Content follows the established style guide
- [ ] Navigation is updated if needed
- [ ] Images have proper alt text
- [ ] Content is accessible and inclusive


## 🏆 Recognition

Contributors will be recognized in several ways:

- Listed in the project's contributors section

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for helping make tech careers more accessible to everyone! 🚀
