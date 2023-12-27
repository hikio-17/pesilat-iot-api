class ClientError extends Error {
   constructor(message: string, public statusCode: number = 403) {
     super(message);
     this.name = 'ClientError';
   }
 }
 
export default ClientError