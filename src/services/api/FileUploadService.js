import apiRequest from "#services/apiRequest";

const route = "/file/";

const upload = (file, onUploadProgress) => {
    const formData = new FormData();

    formData.append("file", file);

    return apiRequest.post(route, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress
    });
}

const getFiles = (id = null) => {
    return apiRequest.get(route + (id != null ? `/${id}` : ""));
}

const FileUploadService = {
    upload,
    getFiles,
}

export default FileUploadService;