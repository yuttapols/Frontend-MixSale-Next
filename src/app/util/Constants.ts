export const APP = {
    PROJECT_NAME: "MIX-SALE",
    API_VERSION : "/api/v1",
    MAX_SIZE_IMAGE : 1048576,
    FILE_TYPE : ["jpg","jpeg","png","gif", "jfif"],

    STATUS_OF_CURRENT : "CURRENT",
    STATUS_OF_WEEK : "WEEK",
    STATUS_OF_MONTH : "MONTH",
};

export const CALL_SERVICE = {
    AUTHENTICATION : {
        LOGIN : "/authentication/login",
        REFRESH_TOKEN : "/authentication/refreshToken"
    },MENU :{
        getAll : "/menu/getAll",
        save : "/menu/save"
    },ROLE:{
        getAll : "/role/getAll",
        // GETALL_MENU : "/role/getAllMenu"
    },PRODUCT:{
        getAllProductCategory : "/product/getAllProductCategory",
        getImageByte : "/product/getImageByte",
        getAll : "/product/getAll",
        saveProduct: "/product/save",
        saveImage : "/product/saveImage",
        getProductImgByProductId : "/product/getProductImgByProductId",
        deleteProduct : "/product/delete",
        getById : "/product/getById",
        updateProduct : "/product/update",
        deleteImgByProductImageId : "/product/deleteImgByProductImageId",
        getByCategoryId : "/product/getByCategoryId",
        getAllProductUnit : "/product/getAllProductUnit"

    },USER:{
        updateImageProfile : "/user/detail/updateImageProfile",
        getImageByte : "/user/detail/getImageByte",
        updateProfile : "/user/detail/updateProfile",
        getById : "/user/detail/getById",
        getCustomerAll : "/user/detail/getCustomerAll",
        delete : "/user/detail/delete",
        checkUsreName : "/user/detail/checkUsreName",
        save : "/user/detail/save",
        getPrefixAll : "/user/detail/getPrefixAll",
    },IMPORT_PRODUCT:{
        save : "/import/product/save",
        findById : "/import/product/getById",
        findByImportProductNo : "/import/product/getByImportProductNo",
        findAll : "/import/product/getAll",
        update : "/import/product/update",
        delete : "/import/product/delete",
        findByStatus : "/import/product/getByStatus",
        findByCustomerNo : "/import/product/getByCustomerNo",
        updateStatus : "/import/product/updateStatus",
    },STOCK:{
        getStockById : "/stock/getStockById",
        getStockAll : "/stock/getStockAll",
        getStockHistoryByStockId : "/stock/getStockHistoryByStockId",
        getStockHistoryByDate : "/stock/getStockHistoryByDate",
        getStockHistoryByStockIdAndDate : "/stock/getStockHistoryByStockIdAndDate",
        checkStock : "/stock/checkStock",
    },EXPORT_PRODUCT:{
        save : "/export/product/save",
        getByExportProductId : "/export/product/getByExportProductId",
        getByExportProductNo : "/export/product/getByExportProductNo",
        getAll : "/export/product/getAll",
        update : "/export/product/update",
        delete : "/export/product/delete",
    },REPORT:{
        stockDownloadPdf : "/report/stock/download/pdf",
        stockDownloadExcel : "/report/stock/download/excel",
    },ADDRESS:{
        getProvincesAll : "/address/getProvincesAll",
        getProvincesById : "/address/getProvincesById",
        getAmphuresByProvincesId : "/address/getAmphuresByProvincesId",
        getAmphuresById : "/address/getAmphuresById",
        getDistrictsByAmphuresId : "/address/getDistrictsByAmphuresId",
        getDistrictsById : "/address/getDistrictsById",
    }
};