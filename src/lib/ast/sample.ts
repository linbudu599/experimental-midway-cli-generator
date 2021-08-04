import {
  ArrowFunction,
  Project,
  SyntaxKind,
  VariableDeclarationKind,
} from 'ts-morph';
import * as path from 'path';
import * as strip from 'strip-comments';

import {
  addImportDeclaration,
  ImportType,
  findImportsDeclaration,
  findImportsSpecifier,
  updateDefaultImportClause,
  updateNamespaceImportClause,
  removeImportDeclaration,
  removeImportDeclarationByTypes,
} from './import';
import { addConfigKey } from './config';
import {
  tmp,
  getExistClassMethods,
  updateDecoratorArrayArgs,
  addLifeCycleMethods,
  getLifeCycleClassMethods,
  addPlainClassMethods,
  addClassProperty,
  addClassPropertyWithMidwayDecorator,
  ensureLifeCycleMethodArguments,
} from './configuration';
import { insertFunctionBodyStatement } from './plugin';

const project = new Project();

const configSource = project.addSourceFileAtPath(
  path.resolve(__dirname, '../../base/config-origin/config.default.ts')
);

const configurationSource = project.addSourceFileAtPath(
  path.resolve(__dirname, '../../base/midway-configuration.ts')
);

// updateNamespaceImportClause(configurationSource, '@midwayjs/orm', 'pathn1');

// removeImportDeclaration(configurationSource, [
//   'path',
//   '@midwayjs/decorator',
//   '@midwayjs/orm',
// ]);

removeImportDeclarationByTypes(configurationSource, {
  default: true,
  named: true,
  namespace: true,
});
