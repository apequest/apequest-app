export interface IAdminUser {
    name: string;
    walletAddress: string;
    networks: [Map<string, string>];
}