export const getResponse = async (message, execute) => {
  const { method, params, id } = message
  try {
    const result = await execute(method, ...params)
    return {
      jsonrpc: '2.0',
      id,
      result,
    }
  } catch (error) {
    return {
      jsonrpc: '2.0',
      id,
      error: {
        message: error.message,
        data: error.stack,
      },
    }
  }
}
