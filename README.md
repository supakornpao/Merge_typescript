Setup steps for this project
1. Install type script globally using "npm install -g typescript".
2. Create project folder (mkdir [folder_name])
3. Make directories for code file and test ("mkdir src" and "mkdir test")
4. At the root directory of project, run "npm init -y"
5. Adding Typescript as a development dependency "npm install typescript --save-dev"
6. At src directory, create Typescript file for containing merge function. In this case is index.ts.
7. To compile Typescript into JavaScript, use "tsc index.ts" and use Node.js to execute the resulting file by the command "node index.js". In ts file should have "export" before function.
8. For testing tools, I use Jest. First, adding Jest as a development dependency using "npm intall jest --save-dev".
9. Install ts-jest using "npm install ts-jest --save-dev".
10. Install type definition for Jest "npm install @types/jest --save-dev"
11. Create index.test.ts. file with this code.
import { merge } from '../src/index';

describe('Test case 1', () => {
  test('collection_1 = [1,2,4,6] collection_2 = [2,6,7,9] collection_3 = [9,6,3,1]', () => {
    expect(merge([1,2,4,6],[2,6,7,9],[9,6,3,1])).toStrictEqual([1, 1, 2, 2, 3, 4, 6, 6, 6, 7, 9, 9]);
  });
});


describe('Test case 2', () => {
  test('collection_1 = [1,4,6,7,8,12] collection_2 = [2,5,6,9,20] collection_3 = [32,16,14,10]', () => {
    expect(merge([1,4,6,7,8,12],[2,5,6,9,20],[32,16,14,10])).toStrictEqual([ 1,  2,  4,  5,  6,  6,  7,  8,  9, 10, 12, 14, 16, 20, 32]);
  });
});


12. Create jest.config.js with this code.
module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};

13. Run test using "npm run test".
