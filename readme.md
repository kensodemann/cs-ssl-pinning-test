# Certificate Pinning

This test application demonstrates how to use the SSL pinning plugin in a Capacitor app.

## How to extract a certificate

Run the following replacing `[domain]` with your domain name:
```bash
`openssl s_client -connect [domain]:443 -showcerts </dev/null 2>/dev/null | openssl x509 -outform DER > certificate.cer`
```

```bash
`openssl s_client -connect app-qs.lbv.landbw.de:443 -showcerts </dev/null 2>/dev/null | openssl x509 -outform DER > src/assets/certificates/app-qs.lbv.landbw.de.cer`
```


