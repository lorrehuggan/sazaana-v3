import React from "react";
import { Box } from "@components/ui/Box";
import { Text } from "@components/ui/Text";
import { IconAlertCircle } from "@tabler/icons-react";

interface ErrorsUIProps {
  errors: string | undefined;
}

function ErrorMessage({ errors }: ErrorsUIProps) {
  return (
    <Box mt="md" align="center" gap="sm">
      <Text
        as="small"
        size="small"
        css={{
          color: "$error",
          fontWeight: "bold",
        }}
      >
        {errors}
      </Text>
    </Box>
  );
}

export default ErrorMessage;
