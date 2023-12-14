import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.pinning.test',
  appName: 'cs-pinning-test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SSLPinning: {
      certs: ["src/assets/certificates/app-qs.lbv.landbw.de.cer"],      
      excludedDomains: [],
    },
  }
};

export default config;
