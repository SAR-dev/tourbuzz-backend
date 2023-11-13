/// <reference path="..\pb_data\types.d.ts" />

// register custom routes
// /api/hello
routerAdd(
    "get",
    "/api/hello",
    (c) => {
        return c.string(200, "Hello!")
    }
)