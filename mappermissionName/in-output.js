s = '{"DASHBOARD":{"PERMISSIONS":["READ_INVENTORY_DASHBOARD","READ_CONNECTION_DASHBOARD"]},"USER":{"PERMISSIONS":["MANAGE_DEPARTMENT","MANAGE_USER"]}}'

const json = JSON.parse(s);

console.log(json)

const permissionMap = {
    "READ_INVENTORY_DASHBOARD": "商品统计查看",
    "READ_CONNECTION_DASHBOARD": "供应商统计查看",
    "MANAGE_DEPARTMENT": "部门管理",
    "MANAGE_USER": "员工管理"
}

const permissionTypeMap = {
    "DASHBOARD": "统计面板权限",
    "USER": "员工权限管理"}


function mapPermissionName(json) {
    let outputJson = {}
    for (let key in json) {
        outputJson[''+key+''] = {}
        outputJson[''+key+''].name = permissionTypeMap[''+key+'']
        outputJson[''+key+''].permissions = []

        const permissions = eval('json.'+key).PERMISSIONS
        for (let index = 0; index < permissions.length; index++){
            let permission = {}
            permission.type = permissions[index]
            permission.name = permissionMap[''+permissions[index]+'']
            outputJson[''+key+''].permissions.push(permission)
        }
    }

    return outputJson
}
console.log(mapPermissionName(json))
