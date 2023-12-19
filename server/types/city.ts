declare namespace NSCity {
    interface create {
        name: string;
    }
    interface get extends create {
        id: string;
    }

    interface update extends create {}
}