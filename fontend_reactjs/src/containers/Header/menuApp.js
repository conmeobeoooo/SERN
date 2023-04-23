export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-system',
        menus: [
            {
                name: 'menu.admin.crud-redux', link: "/system/user-redux",
            },
            {
                name: 'menu.admin.crud', link: "/system/user-manage",
            },
            {
                name: 'menu.admin.manage-doctor', link: "/system/manage-doctor",
            },

        ]
    },
    { //phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: "/system/manage-clinic",
            }
        ]
    },
    { //chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: "/system/manage-specialty",
            }
        ]
    },
    { //chuyên khoa
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: "/system/manage-handbook",
            }
        ]
    },
];