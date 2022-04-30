import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
};
export default config;
