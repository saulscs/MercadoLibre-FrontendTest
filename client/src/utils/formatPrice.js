export const formatPrice = number =>
        "." === "."
        ? new Intl.NumberFormat("de-DE").format(number)
        : new Intl.NumberFormat().format(number);