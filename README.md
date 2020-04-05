# givngo
![givngo](https://github.com/Givngo-Capital-Management/givngo/workflows/givngo/badge.svg)

## Development

Requirements: ensure you have `node`, `npm`, and `yarn` installed on your machine

1. Checkout repo: `git clone git@github.com:Givngo-Capital-Management/givngo.git`
1. Request environment keys: https://drive.google.com/drive/u/0/folders/1tVoXPNsvnfcH19GK2umRvavJ9xXyWfHG
1. Download `.env`, `.env.build`, and `firebaseServiceAccount.json`
1. Run `yarn` to install dependencies
1. Run `yarn dev` to start a development server on `localhost:3000`

### Adding a component

Components are view objects that do not need to make network requests
1. Add a component under the `components` directory, `NewComponent`
1. Add `NewComponent.js` and `NewComponent.scss` to the new directory
1. Use this as a template:

```javascript
import React from 'react';
import './NewComponent.scss';

export default function NewComponent() {
  return (
    <div className="NewComponent">
    </div>
  );
}
```

### Contribution guide

To contribute, first clone this repository, and create a new branch. You should not merge directly to `master`.

1. Create a new branch: git checkout -b `branch-name`
1. Squash all your commits
1. Open a pull request
1. Ensure tests have passed
1. Get at least 1 reviewers approval
1. Merge when approved and tests are green