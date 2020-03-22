# givngo
![givngo](https://github.com/Givngo-Capital-Management/givngo/workflows/givngo/badge.svg)

## Development

Requirements: ensure you have `node`, `npm`, and `yarn` installed on your machine

1. Checkout repo: `git clone git@github.com:Givngo-Capital-Management/givngo.git`
1. Run `yarn` to install dependencies
1. Run `yarn start` to start a development server, a window will automatically be opened to `localhost:3000`

### Adding a component

Components are view objects that do not need to make network requests
1. Add a new directory under the `component` directory, `NewComponent`
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

### Adding a container

Containers are view objects that do need a network request

1. Add a new directory under the `container` directory, `NewContainer`
1. Add `NewContainer.js` and `NewContainer.scss` to the new directory
1. Use this as a template:

```javascript
import React from 'react';
import './NewContainer.scss';

export default function NewContainer() {
  return (
    <div className="NewContainer">
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