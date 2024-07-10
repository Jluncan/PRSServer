using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PRSServer.Migrations
{
    /// <inheritdoc />
    public partial class renamedzipcode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ZipCode",
                table: "vendors",
                newName: "Zip");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "RequestLines");

            migrationBuilder.DropColumn(
                name: "TotalAmount",
                table: "RequestLines");

            migrationBuilder.RenameColumn(
                name: "Zip",
                table: "vendors",
                newName: "ZipCode");
        }
    }
}
