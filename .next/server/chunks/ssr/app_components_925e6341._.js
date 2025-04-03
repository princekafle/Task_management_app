module.exports = {

"[project]/app/components/TaskList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$TaskContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/TaskContext.js [app-ssr] (ecmascript)");
"use client";
;
;
const TaskList = ()=>{
    const { tasks, updateTask, deleteTask } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$TaskContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskContext"]);
    console.log(tasks);
// return (
//   <div className="space-y-4">
//     {tasks.map((task) => (
//       <div key={task._id} className="p-4 border rounded-lg flex justify-between items-center">
//         <div>
//           <h3 className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-black"}`}>
//             {task.title}
//           </h3>
//           <p>{task.description}</p>
//           <p className="text-sm text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={() => updateTask(task._id, { completed: !task.completed })}
//             className={`px-3 py-1 rounded ${task.completed ? "bg-gray-400" : "bg-green-500 text-white"}`}
//           >
//             {task.completed ? "Undo" : "Complete"}
//           </button>
//           <button onClick={() => deleteTask(task._id)} className="px-3 py-1 bg-red-500 text-white rounded">
//             Delete
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// );
};
const __TURBOPACK__default__export__ = TaskList;
}}),
"[project]/app/components/TaskForm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$TaskContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/TaskContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TaskForm = ()=>{
    const { addTask } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$TaskContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskContext"]);
    const [task, setTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium"
    });
    const handleChange = (e)=>setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({
            ...task,
            completed: false
        });
        setTask({
            title: "",
            description: "",
            dueDate: "",
            priority: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "p-4 border rounded-lg space-y-2",
        children: [
            "Task Title : ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "title",
                value: task.title,
                onChange: handleChange,
                placeholder: "Task Title",
                className: "w-full p-2 border rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/app/components/TaskForm.js",
                lineNumber: 25,
                columnNumber: 20
            }, this),
            "Task Description:",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "description",
                value: task.description,
                onChange: handleChange,
                placeholder: "Task Description",
                className: "w-full p-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/app/components/TaskForm.js",
                lineNumber: 34,
                columnNumber: 24
            }, this),
            "Task Due Date: ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "date",
                name: "dueDate",
                value: task.dueDate,
                onChange: handleChange,
                className: "w-full p-2 border rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/app/components/TaskForm.js",
                lineNumber: 41,
                columnNumber: 19
            }, this),
            "Task priority: ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "priority",
                value: task.priority,
                onChange: handleChange,
                className: "w-full p-2 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "High",
                        children: "High"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskForm.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Medium",
                        children: "Medium"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskForm.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Low",
                        children: "Low"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TaskForm.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TaskForm.js",
                lineNumber: 49,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full bg-blue-500 text-white py-2 rounded",
                children: "Add Task"
            }, void 0, false, {
                fileName: "[project]/app/components/TaskForm.js",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TaskForm.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TaskForm;
}}),

};

//# sourceMappingURL=app_components_925e6341._.js.map