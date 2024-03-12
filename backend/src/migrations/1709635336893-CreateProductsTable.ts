import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductsTable1709635336893 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'varchar',
          },
          {
            name: 'discount',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'images',
            type: 'json',
          },
          {
            name: 'categoryId',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            columnNames: ['categoryId'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
