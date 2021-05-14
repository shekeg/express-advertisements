function buildMakeAdvertisement() {
  return function makeAdvertisement({
    id = null,
    shortText = '',
    description = '',
    images = [],
    userId = null,
    createdAt = null,
    updatedAt = null,
    tags = [],
    isDeleted = null,
  }) {
    if (shortText === '') {
      throw new Error('поле shortText обязатьельно для заполнения');
    }
    if (userId === '') {
      throw new Error('поле userId обязатьельно для заполнения');
    }
    if (isDeleted === null) {
      throw new Error('поле isDeleted обязатьельно для заполнения');
    }

    return {
      id,
      shortText,
      description,
      images,
      userId,
      createdAt,
      updatedAt,
      tags,
      isDeleted,
    };
  };
}

exports.buildMakeAdvertisement = buildMakeAdvertisement;
