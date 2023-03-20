export const getPaginatedData=(originalData,pageNumber)=>{
    return originalData.slice(0,20*pageNumber);
}
