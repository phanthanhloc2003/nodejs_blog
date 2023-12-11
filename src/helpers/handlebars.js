const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortTable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default"
        const icons = {
            default: "bi bi-arrows-expand",
            asc: "bi bi-caret-up-fill",
            desc: "bi bi-caret-down-fill",
        }
        const types = {
            default: "desc",
            asc: "desc",
            desc: "asc",
        }
        const icon = icons[sortType]
        const type = types[sort.type]

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        const result = ` <a href="${href}"><i class="${icon}"></i></a>`
        return new Handlebars.SafeString(result);
    }
}