class ApiConstants {

    get lectures()  {
        return {
            collection : '/api/lectures'
        }
    }

    get assignments() {
        return {
          member     : (id) => `/api/assignments/${id}`,
          collection : `/api/assignments`
        }
    }
    
}

const APIConstants = new ApiConstants();