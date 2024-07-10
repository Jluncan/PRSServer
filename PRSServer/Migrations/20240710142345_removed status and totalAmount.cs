using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PRSServer.Migrations
{
    /// <inheritdoc />
    public partial class removedstatusandtotalAmount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "RequestLines");

            migrationBuilder.DropColumn(
                name: "TotalAmount",
                table: "RequestLines");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "RequestLines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "TotalAmount",
                table: "RequestLines",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
