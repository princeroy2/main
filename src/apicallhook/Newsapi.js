export const apiCall = async (page=1) => {
  const res = await fetch(`https://nativeapi.site/api/getdata/?page=${page}`, {
    // next: {
    //   revalidate: 300, // Revalidate every 5 minutes (300 seconds)
    // },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();
  return json;
};

export const apiCall2 = async () => {
  const res = await fetch(`https://nativeapi.site/api/getdata/`, {
    next: {
      revalidate: 300, // Revalidate every 5 minutes (300 seconds)
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();
  return json;
};
