const ChatApi = () => {
  const getChatList = async (userId: string): Promise<any> => {
    const chatList = new Array(10).fill(0).map((_, index) => ({
      id: index + 1,
      date: new Date(
        `2023-08-${30 - index}T10:00:00.000Z`
      ).toLocaleDateString(),
    }));
    return {
      data: chatList,
    };
  };

  const getMessageList = async (id: number): Promise<any> => {
    const sampleData = [
      {
        date: new Date("2023-08-31T10:00:00.000Z").toLocaleString(),
        isSender: true,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dolor eget elit ultrices tincidunt in ac ligula. Maecenas mollis tincidunt enim, eget iaculis dui vestibulum faucibus. Phasellus facilisis vehicula felis in auctor. Aenean et pharetra diam. Pellentesque sagittis aliquam augue, quis pharetra lorem placerat in. Vivamus eu orci vitae.",
      },
      {
        date: new Date("2023-08-31T10:00:00.000Z").toLocaleString(),
        isSender: false,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dolor eget elit ultrices tincidunt in ac ligula. Maecenas mollis tincidunt enim, eget iaculis dui vestibulum faucibus. Phasellus facilisis vehicula felis in auctor. Aenean et pharetra diam. Pellentesque sagittis aliquam augue, quis pharetra lorem placerat in. Vivamus eu orci vitae.",
      },
    ];
    const duplicateCount = Math.ceil(id * 2);
    const messageList = new Array(duplicateCount).fill([...sampleData]).flat();
    return {
      data: messageList,
    };
  };

  return {
    getChatList,
    getMessageList,
  };
};

export default ChatApi;
