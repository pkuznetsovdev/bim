export function getInvalidateTags<TagType>(tagType: TagType) {
  return [
    {
      type: tagType,
      id: 'LIST',
    },
  ];
}

export function getProvidesTags<TagType, Result extends Array<{ id: number }>>(
  tagType: TagType,
) {
  return (result: Result | undefined) =>
    result
      ? [
          ...result.map(({ id }) => ({
            type: tagType,
            id,
          })),
          {
            type: tagType,
            id: 'LIST',
          },
        ]
      : getInvalidateTags(tagType);
}
