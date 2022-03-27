using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class ETsroreDBContext : DbContext
    {
        public ETsroreDBContext()
        {
        }

        public ETsroreDBContext(DbContextOptions<ETsroreDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CustomerDetail> CustomerDetails { get; set; }
        public virtual DbSet<CustomerLedgerDetail> CustomerLedgerDetails { get; set; }
        public virtual DbSet<DesignationDetail> DesignationDetails { get; set; }
        public virtual DbSet<EmployeeDetail> EmployeeDetails { get; set; }
        public virtual DbSet<ProductDetail> ProductDetails { get; set; }
        public virtual DbSet<PurchaseDetail> PurchaseDetails { get; set; }
        public virtual DbSet<Sale> Sales { get; set; }
        public virtual DbSet<SalesProductTable> SalesProductTables { get; set; }
        public virtual DbSet<SupplierDetail> SupplierDetails { get; set; }
        public virtual DbSet<SupplierLedgerDetail> SupplierLedgerDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CustomerDetail>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("CustomerID");

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.CustomerName).HasMaxLength(50);

                entity.Property(e => e.Phone).HasMaxLength(50);
            });

            modelBuilder.Entity<CustomerLedgerDetail>(entity =>
            {
                entity.HasKey(e => e.InvoiceId);

                entity.Property(e => e.InvoiceId)
                    .HasMaxLength(50)
                    .HasColumnName("InvoiceID");
            });

            modelBuilder.Entity<DesignationDetail>(entity =>
            {
                entity.HasKey(e => e.DesignationName);

                entity.Property(e => e.Department).HasMaxLength(50);

                entity.Property(e => e.DesignationName).HasMaxLength(50);

                entity.Property(e => e.RoleName).HasMaxLength(50);
            });

            modelBuilder.Entity<EmployeeDetail>(entity =>
            {
                entity.HasKey(e => e.EmployeeId);

                entity.Property(e => e.EmployeeId)
                    .HasMaxLength(50)
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.Department).HasMaxLength(50);

                entity.Property(e => e.EmployeeName).HasMaxLength(50);

                entity.Property(e => e.MailId)
                    .HasMaxLength(50)
                    .HasColumnName("MailID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);
            });

            modelBuilder.Entity<ProductDetail>(entity =>
            {
                entity.HasKey(e => e.ItemId);

                entity.Property(e => e.ItemId)
                    .HasMaxLength(50)
                    .HasColumnName("ItemID");

                entity.Property(e => e.Department).HasMaxLength(50);

                entity.Property(e => e.Price).HasMaxLength(50);

                entity.Property(e => e.ProductName).HasMaxLength(50);
            });

            modelBuilder.Entity<PurchaseDetail>(entity =>
            {
                entity.HasKey(e => e.ProductId);

                entity.Property(e => e.ProductId)
                    .HasMaxLength(50)
                    .HasColumnName("ProductID");

                entity.Property(e => e.ProductName).HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasMaxLength(50)
                    .HasColumnName("SupplierID");
            });

            modelBuilder.Entity<Sale>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.Property(e => e.CustomerId)
                    .HasMaxLength(50)
                    .HasColumnName("CustomerID");

                entity.Property(e => e.ProductName).HasMaxLength(50);
            });

            modelBuilder.Entity<SalesProductTable>(entity =>
            {

                entity.HasKey(e => e.ProductId);

                entity.ToTable("SalesProductTable");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(50)
                    .HasColumnName("ProductID");

                entity.Property(e => e.Gst)
                    .HasMaxLength(50)
                    .HasColumnName("GST");

                entity.Property(e => e.Hsnnumber).HasColumnName("HSNnumber");

                entity.Property(e => e.ProductName).HasMaxLength(50);
            });

            modelBuilder.Entity<SupplierDetail>(entity =>
            {
                entity.HasKey(e => e.SupplierId);

                entity.Property(e => e.ContactPerson).HasMaxLength(50);

                entity.Property(e => e.Phone).HasMaxLength(50);

                entity.Property(e => e.SupplierCompany).HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasMaxLength(50)
                    .HasColumnName("SupplierID");
            });

            modelBuilder.Entity<SupplierLedgerDetail>(entity =>
            {
                entity.HasKey(e => e.InvoiceId);

                entity.Property(e => e.InvoiceId)
                    .HasMaxLength(50)
                    .HasColumnName("InvoiceID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
