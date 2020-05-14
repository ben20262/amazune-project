class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :content
      t.float :price
      t.references :store, null: false, foreign_key: true
    end
  end
end
