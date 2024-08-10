import apiRequest from "#services/apiRequest";
import { defer } from "react-router-dom";

const route = "/branch/";

const createBranch = async (body) => {
    return await apiRequest.post(route, body);
}

const updateBranch = async (id, body) => {
    return await apiRequest.put(route + `/${id}`, body);
}

const deleteBranch = async (id, body) => {
    return await apiRequest.delete(route + `/${id}`, body);
}

const getBranches = async (id = null) => {
    return await apiRequest.get(route + (id ? `/${id}` : ""));
}

const singlePageLoader = async ({request, params}) => {
    return (await getBranches(params.id)).data;
}

const listPageLoader = ({ request, params }) => {
  const query = request.url.split("?")[1];
  const branchPromise = apiRequest.get(route + "?" + query);

  return defer({
    branchResponse: branchPromise
  });
}

const BranchService = {
    createBranch,
    updateBranch,
    deleteBranch,
    getBranches,
    singlePageLoader,
    listPageLoader
}

export default BranchService;