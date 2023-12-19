declare namespace NSUser {
    interface create {
        email: string;
        password: string;
        firstName?: string;
        lastName?: string;
    }
    interface get extends create {
        updatedAt: string;
        createdAt: string;
        id: string;
    }

    interface update extends create {}
}