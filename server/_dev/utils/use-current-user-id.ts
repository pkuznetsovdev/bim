


// TODO
function createUseCurrentUserId() {
    let userId: string = 'test';

    return {
        set: (id: string) => userId = id,
        get: () => userId,
    };
}

export const useCurrentUserId = createUseCurrentUserId();