import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-capacitor-app',
  webDir: 'dist/ejemplo_v14',
  server: {
    androidScheme: 'https'
  }
};

export default config;