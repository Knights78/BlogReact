import{Client,Id,Databases,Storage,query, ID} from "appwrite"
import conf from "../conf.js"

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);// lines instantiate objects of the Databases and Storage classes, passing the client instance as a parameter. It suggests that the Service class interacts with databases and storage, possibly part of a larger service or utility for managing data.
        this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId
                }

            )
            
        } catch (error) {
            console.log("error in config.js file",error)
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){//slug is our document id   userId is not given because only 1 user will only update so theres no need of userid 
        try {
           return await  this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,content,featuredImage,status //this is the object containing the updated values  which will be saved in the database
            }

           )
        } catch (error) {
            console.log("updat post fucntion error",error)
        }
    }
    async deletePost(slug){//slug is the document id we only require that to delete data
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
          console.log("error in the delete post ",error)   
          return false
        }
    }

    //for getting only one post we just only have to passed the slug value
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("error in get post",error)
        }
    }
    //if i need all the post from the databse 
    async getPosts(queries=[Query.equal("status","active")]){//i need that query only which have the status active 

        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
            
        } catch (error) {
            console.log("getposts",error )
        }
    }
    async uploadFile(){//i need that query only which have the status active 

        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("upload file ",error )
            return false
        }
    }

    async deleteFile(){//i need that query only which have the status active 

        try {
           
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                file
            )
            return true
            
        } catch (error) {
            console.log("delete file ",error )
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service=new Service()
export default service