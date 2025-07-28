const theme = {};

const handleError = (error: Error): void => {
  console.error("Lexical error:", error);
};

export const initialConfig = {
  namespace: "MyEditor",
  theme,
  onError: handleError,
};
