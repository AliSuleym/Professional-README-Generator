function renderLicenseBadge(license) {
  let badgeURL = '';

  switch (license) {
    case 'MIT':
      badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Apache 2.0':
      badgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'GPL 3.0':
      badgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    default:
      return '';
  }

  return `[![License](${badgeURL})](https://opensource.org/licenses/${license})\n\n`;
}

/*function generateMarkdown(data) {

return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

[Installation]('# ${data.In})

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${questionsSection(data)}
`;
} */
