export function validationSearch(input) {
    let error = ""
    
    if (input > 826)  error = 'No existe un personaje con ese ID'
    
    if (!input) error = null

    return error
}