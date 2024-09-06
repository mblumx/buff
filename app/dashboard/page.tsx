import { getTrendingMovies } from "@/components/server/requests";


const Dashboard = async() => {
    const movies = (await getTrendingMovies())
    console.log(movies)

    


    return (
    <div><h1>{movies.map((movie) => movie.title)}</h1></div>
);
}
 
export default Dashboard;