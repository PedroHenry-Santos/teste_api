import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class AddBuilderState1627729190675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'builders',
      new TableColumn({
        name: 'state_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'builders',
      new TableForeignKey({
        name: 'StateBuilder',
        columnNames: ['state_id'],
        referencedColumnNames: ['state_id'],
        referencedTableName: 'states',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('builders', 'SateBuilder');
    await queryRunner.dropColumn('builders', 'state_id');
  }
}
