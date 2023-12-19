declare namespace NSPet {
    interface create {
        type: string;
        breed: string;
        age?: number;
        name?: string;
        description?: string;
        photos?: string[];
        userId: string;
    }
    interface get extends create {
        updatedAt: string;
        createdAt: string;
        id: string;
    }

    interface update extends create {}
}