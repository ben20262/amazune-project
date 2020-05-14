class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.text :content
	  t.string :image
	  t.references :user, null: false, foreign_key: true
    end
  end
end
