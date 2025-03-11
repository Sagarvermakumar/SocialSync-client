import React from 'react';
import { Container, Heading, Text, Box, Link } from '@chakra-ui/react';

const PrivacyPolicy = () => (
  <Container maxW="container.md" py={10}>
    <Heading mb={4}>Privacy Policy</Heading>
    <Box>
      <Text mb={4}>
        <strong>Effective Date:</strong> [Date]
      </Text>
      <Text mb={4}>
        SaaSify ("we," "our," or "us") operates the "Social Media Content Planner & Scheduler" web application (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
      </Text>
      <Box mb={4}>
        <Heading size="md" mb={2}>1. Information We Collect</Heading>
        <Text mb={2}><strong>Personal Information:</strong></Text>
        <Text>- Name, email address, and other contact details when you register an account.</Text>
        <Text>- Profile information from connected social media accounts.</Text>
        <Text mt={2}><strong>Usage Data:</strong></Text>
        <Text>- Information on how you access and use the Service, such as your IP address, browser type, and pages visited.</Text>
        <Text mt={2}><strong>Social Media Data:</strong></Text>
        <Text>- Tokens and access data required to schedule and publish content on your connected social media accounts.</Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>2. How We Use Your Information</Heading>
        <Text>- To provide and maintain the Service.</Text>
        <Text>- To manage your account, including authentication and authorization.</Text>
        <Text>- To facilitate social media content scheduling and publishing.</Text>
        <Text>- To communicate with you regarding updates, offers, and support.</Text>
        <Text>- To improve and personalize your experience with the Service.</Text>
        <Text>- To monitor and analyze usage and trends.</Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>3. Sharing Your Information</Heading>
        <Text>- <strong>With Your Consent:</strong> When you grant permissions to connect your social media accounts.</Text>
        <Text>- <strong>Service Providers:</strong> With third-party vendors who assist in providing the Service (e.g., hosting, analytics).</Text>
        <Text>- <strong>Legal Requirements:</strong> When disclosure is necessary to comply with the law or legal processes.</Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>4. Data Security</Heading>
        <Text>
          We implement security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your data.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>5. Your Rights</Heading>
        <Text>- Access and update your personal information.</Text>
        <Text>- Request deletion of your data.</Text>
        <Text>- Withdraw consent for data processing.</Text>
        <Text mt={2}>
          To exercise these rights, please contact us at <Link href="mailto:[Contact Email]" color="blue.500">[Contact Email]</Link>.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>6. Changes to This Privacy Policy</Heading>
        <Text>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We recommend reviewing this policy periodically for updates.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>7. Contact Us</Heading>
        <Text>
          If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:[Contact Email]" color="blue.500">[Contact Email]</Link>.
        </Text>
      </Box>
      <Text mt={4} textAlign="center">
        © [Year] SaaSify. All rights reserved.
      </Text>
    </Box>
  </Container>
);

export default PrivacyPolicy;
