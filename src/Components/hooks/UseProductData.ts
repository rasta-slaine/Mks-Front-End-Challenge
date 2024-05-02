import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { ApiResponse, ProductResponse } from "../Interfaces/ProductData";

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';

const fetchData = async (): Promise<ProductResponse> => {
    try {
        const response = await axios.get<ApiResponse[]>(API_URL, {
            params: {
                page: 1,
                rows: 6,
                sortBy: 'id',
                orderBy: 'ASC'
            }
        });
        
        return { data: response.data }; // Ensure to wrap response.data in ProductResponse object
    } catch (error) {
        // Log any errors
        console.error("Error fetching product data:", error);
        throw error; // Rethrow the error for React Query to handle
    }

    
};

export function UseProductData() {
    const query = useQuery<ProductResponse>({
        queryFn: fetchData,
        queryKey: ['ProductData']
    });

    if (query.isLoading) {
        // Loading state
        return { isLoading: true };
    }

    if (query.error) {
        // Error state
        console.error("Error fetching product data:", query.error);
        return { error: query.error };
    }


    // Successful state
    return {
        data: query.data?.data,
        isLoading: query.isLoading,
    };
}
