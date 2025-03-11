import React from 'react';
import { Container, Heading, Text, Box, Link } from '@chakra-ui/react';

const TermsOfService = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={4}>Terms of Service</Heading>
    <Box>
      <Text mb={4}>
        <strong>Effective Date:</strong> [Date]
      </Text>
      <Text mb={4}>
        Welcome to SocialSync! These Terms of Service ("Terms") govern your access to and use of the SocialSync web application (the "Service") provided by SaaSify ("we," "our," or "us"). By using our Service, you acknowledge and agree that you do so at your own risk and responsibility.
      </Text>

      <Box mb={4}>
        <Heading size="md" mb={2}>1. General Use</Heading>
        <Text>- The Service is provided "as is" without any guarantees. You use the Service at your own discretion and risk.</Text>
        <Text>- We are not responsible for any loss or damage arising from your use of the Service.</Text>
        <Text>- You must be at least 18 years old or have parental consent to use the Service.</Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>2. User Responsibilities</Heading>
        <Text>- You are solely responsible for maintaining the confidentiality of your account and password.</Text>
        <Text>- Any activities under your account are your responsibility. We are not liable for unauthorized use of your account.</Text>
        <Text>- You agree not to misuse the Service or help anyone else to do so.</Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>3. Content and Conduct</Heading>
        <Text>- You retain ownership of the content you create using the Service.</Text>
        <Text>- By submitting content, you grant us a license to use it for providing the Service.</Text>
        <Text>- You must not upload content that is illegal, harmful, or violates others' rights.</Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>4. Third-Party Services</Heading>
        <Text>- Our Service may integrate with third-party platforms. You use these integrations at your own risk.</Text>
        <Text>- We are not responsible for any issues arising from your use of third-party services.</Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>5. Privacy Policy</Heading>
        <Text>
          Your use of the Service is also governed by our <Link href="/privacy-policy" color="blue.500">Privacy Policy</Link>.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>6. Termination</Heading>
        <Text>- We may suspend or terminate your access if you violate these Terms.</Text>
        <Text>- You may stop using the Service at any time, understanding that any data loss is your responsibility.</Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>7. Disclaimer of Warranties</Heading>
        <Text>
          The Service is provided without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>8. Limitation of Liability</Heading>
        <Text>
          To the maximum extent permitted by law, SaaSify will not be liable for any damages, including but not limited to loss of data, profits, or business, arising from your use of the Service.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>9. Changes to These Terms</Heading>
        <Text>
          We may update these Terms from time to time. The updated Terms will be posted on this page, and continued use of the Service constitutes acceptance of the changes.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading size="md" mb={2}>10. Contact Us</Heading>
        <Text>
          If you have questions about these Terms, please contact us at <Link href="mailto:[Contact Email]" color="blue.500">[Contact Email]</Link>.
        </Text>
      </Box>

      <Text mt={4} textAlign="center">
        © [Year] SaaSify. All rights reserved.
      </Text>
    </Box>
  </Container>
);

export default TermsOfService;
