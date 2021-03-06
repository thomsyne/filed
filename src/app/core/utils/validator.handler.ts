export const EmailPattern = {
    emailRegex: '^\\w+[\\w-\\.\\+]*\\@\\w+((-\\w+)|(\\w*))\\.[a-z]{2,3}(\\.[a-z]{2,3})?$'
};

export const PhonePattern = {
    phoneRegex: '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
};