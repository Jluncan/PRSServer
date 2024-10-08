using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
namespace PRSServer {
    public class Program {
        public static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<PrsDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("PrsCapstoneDb") ?? throw new InvalidOperationException("Connection string 'PrsCapstoneDb' not found.")));


            
        

            // Add services to the container.

            builder.Services.AddControllers();

            var app = builder.Build();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run("http://localhost:5000");
        }
    }
}
